<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Article;

use CloudCreativity\LaravelJsonApi\Http\Controllers\JsonApiController;
use Mockery\CountValidator\Exception;

class ArticleController extends Controller
{
    /**
    * Display a list of article.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        //
        $articles=Article::all();
        
        return response()->json([
        'data' => $articles,
        ]);
    }
    
    /**
    * Store a newly created article in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        //
        $requestData=$request->all()['data'][0];
        try{
            Article::create([
            'title'=>$requestData['title'],
            'content'=>$requestData['content'],
            'type'=>$requestData['type'],
            'author'=>$requestData['author'],
            'image_path_left'=>$requestData['image_path_left'],
            'image_path_right'=>$requestData['image_path_right'],
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
    * Update the specified article in storage.
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
            'author'=>$requestData['author'],
            'image_path_left'=>$requestData['image_path_left'],
            'image_path_right'=>$requestData['image_path_right'],
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
    * Remove the specified article from storage.
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