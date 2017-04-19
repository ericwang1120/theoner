<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\ArticleImage;

use Mockery\CountValidator\Exception;

class ArticleImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($articleId)
    {
        //
        $articleImages=ArticleImage::where('article_id',$articleId)->get();

        return response()->json([
            'data' => $articleImages,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$articleId)
    {
        if ($request->hasFile('uploadFile')) {
            $path = $request->file('uploadFile')->store('articleImages');
            $displayType=$request['displayType'];
            try{
                ArticleImage::create([
                    'store_path'=>$path,
                    'display_type'=>$displayType,
                    'article_id'=>$articleId,
                ]);
            } catch (QueryException $ex){
                return response()->json([
                        'errors'=>array(['details'=>"create image fail"]),]
                );
            }
            return response()->json([
                'data' => [
                    'store_path'=>$path,
                    'display_type'=>$displayType,
                    'article_id'=>$articleId,
                ],
            ]);
        }
        return response()->json([
                'errors'=>array(['details'=>"fail"]),]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
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
            ArticleImage::find($id)->update([
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try{
            ArticleImage::destroy($id);
        } catch (Exception $ex){
            return response()->json([
                    'errors'=>array(['details'=>"fail"]),]
            );
        }
        return response()->json([
            'data' => array(['details'=>"success"])
        ]);

    }
}
