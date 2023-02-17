package fr.epita.java_backend.repository;

import fr.epita.java_backend.datamodel.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {

}