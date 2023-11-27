package com.codebox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codebox.entities.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    public User findById(int userId);
    public User findByEmail(String email);
    public User findByEmailAndPassword(String email , String password);
    Boolean existsByEmail(String email);
}
