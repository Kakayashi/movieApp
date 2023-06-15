<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $method = $this->method();

        if($method == 'PUT'){
            return [
                'name' => ['required'],
                'email' => ['required'],
                'country_short' => ['required'],
                'role_id' => ['required'],
            ];
        } else {
            return [
                'name' => ['sometimes','required'],
                'email' => ['sometimes','required'],
                'country_short' => ['sometimes','required'],
                'role_id' => ['sometimes','required'],
            ];
        }

        
    }
}
