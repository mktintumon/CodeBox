package com.codebox.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.codebox.entities.Post;
import com.codebox.entities.User;

@Repository
public interface PostRepo extends JpaRepository<Post,Integer>{
    public Post findById(int postId);
    public Post findByUserAndPostId(User user , int postId);
    public List<Post> findAllPostByUser(User user);
}
