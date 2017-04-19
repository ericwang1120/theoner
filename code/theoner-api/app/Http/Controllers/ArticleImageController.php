<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\ArticleImage;
use App\Article;

use CloudCreativity\LaravelJsonApi\Http\Controllers\JsonApiController;
use Mockery\CountValidator\Exception;

class ArticleImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $articleImages=ArticleImage::all();

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
        //
        $requestData=$request->all()['data'][0];
        try{
            Article::create([
                'title'=>$requestData['title'],
                'display_type'=>$requestData['display_type'],
                'article_id'=>$articleId
            ]);
        } catch (QueryException $ex){
            return response()->json([
                    'errors'=>array(['details'=>"fail"]),]
            );
        }
        return response()->json([
            'data' => $requestData,
        ]);
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
            Article::find($id)->update([
                'title'=>$requestData['title'],
                'content'=>$requestData['content'],
                'type'=>$requestData['type'],
                'author'=>$requestData['author']
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
            Article::destroy($id);
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
