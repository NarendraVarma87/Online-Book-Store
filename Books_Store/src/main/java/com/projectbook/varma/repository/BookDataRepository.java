package com.projectbook.varma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectbook.varma.model.BooksData;
@Repository
public interface BookDataRepository extends JpaRepository<BooksData,Long>{

}
