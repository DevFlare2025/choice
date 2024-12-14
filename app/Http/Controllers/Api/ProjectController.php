<?php

namespace App\Http\Controllers\Api;
use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index(){
        $projects = Project::all();
        $data = [
            'lista'=> $projects,
            'status'=> 200
        ];
        return response()->json($data,200);
    }

    public function store(Request $request){
        $validator=Validator::make($request->all(),[
            'name'=> '',
        ]);

        if($validator->falils()){
          $data =[
            'message'=> 'error en la validacion de los datos',
            'errors'=> $validator->errors(),
            'status'=> 400
          ];
          return response()->json($data,400);
        }

    }



}
