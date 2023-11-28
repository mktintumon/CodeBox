package com.codebox.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.codebox.entities.Post;
import com.codebox.entities.User;
import com.codebox.repository.PostRepo;
import com.codebox.repository.UserRepo;

@Service
public class PostService {
    
    @Autowired
    PostRepo postRepo;

    @Autowired
    UserRepo userRepo;

    public Post createPost(int userId, Post post) {
        User user = userRepo.findById(userId);

        Post newPost = new Post();
        newPost.setTitle(post.getTitle());
        newPost.setContent(post.getContent());
        newPost.setCreatedDate(new Date());
        newPost.setUser(user);

        return postRepo.save(newPost);
    }


    public List<Post> getAllPosts() {
       return postRepo.findAll();
   }
}
