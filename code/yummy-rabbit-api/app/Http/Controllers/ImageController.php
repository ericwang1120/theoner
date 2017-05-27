<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Image;

use Mockery\CountValidator\Exception;

use Illuminate\Support\Facades\Storage;


class ImageController extends Controller
{
    /**
     * Display a listing of image.
     * @param number $articleId
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $images=Image::all();

        return response()->json([
            'data' => $images,
        ]);
    }

    /**
     * Store a newly created image in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  number $articleId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('images');
            try{
                Image::create([
                    'path'=>$path,
                ]);
            } catch (QueryException $ex){
                return response()->json([
                        'errors'=>array(['details'=>"create image fail"]),]
                );
            }
            return response()->json([
                'data' => [
                    'store_path'=>$path,
                ],
            ]);
        }
        return response()->json([
                'errors'=>array(['details'=>"fail"]),]
        );
    }

    /**
     * Update the specified image in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $requestData=$request->all()['data'][0];
        try{
            Image::find($id)->update([
                'store_path'=>$requestData['store_path'],
                'display_type'=>$requestData['display_type'],
                'article_id'=>$requestData['article_id'],
            ]);
        } catch (Exception $ex){
            return response()->json([
                    'errors'=>array(['details'=>"fail"]),]
            );
        }
        return response()->json([
            'data' => $requestData,
        ]);
    }

    /**
     * Remove the specified image from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $image=Image::find($id);
        //
        try{
            Image::destroy($id);
        } catch (Exception $ex){
            return response()->json([
                    'errors'=>array(['details'=>"fail"]),]
            );
        }
        Storage::delete($image['path']);
        return response()->json([
            'data' => array(['details'=>"success"])
        ]);

    }
}
