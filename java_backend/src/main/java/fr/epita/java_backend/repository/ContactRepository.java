package fr.epita.java_backend.repository;

import fr.epita.java_backend.datamodel.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}