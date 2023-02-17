package fr.epita.java_backend.repository;


import fr.epita.java_backend.datamodel.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByUsernameAndPassword(String userName, String password);
}
