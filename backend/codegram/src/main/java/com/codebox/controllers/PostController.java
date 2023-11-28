package com.codebox.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codebox.entities.Post;
import com.codebox.services.PostService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PostController {

    @Autowired
    PostService postService;


    @PostMapping("/create-post/{userId}")
    public ResponseEntity<Post> createTodo(@PathVariable int userId, @RequestBody Post post) {
        Post createPost = postService.createPost(userId, post);
        return new ResponseEntity<>(createPost, HttpStatus.CREATED);
    }


    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllTodosForUser() {
        List<Post> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }
    
}
