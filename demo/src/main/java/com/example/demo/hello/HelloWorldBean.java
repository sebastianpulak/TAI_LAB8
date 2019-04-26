package com.example.demo.hello;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message){
        this.message = message;
    }

    public void setMessage(){
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

    @Override
    public String toString(){
        return String.format("HelloWorldBean [message=%s]", message);
    }

}
