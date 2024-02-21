package com.projectbook.varma.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectbook.varma.model.BooksData;
import com.projectbook.varma.repository.BookDataRepository;

@Service
public class BookDataService {
	@Autowired
	BookDataRepository bookDataRepository;
	public List<BooksData> getAllData(){
		return bookDataRepository.findAll();
	}
	public BooksData insertBook(BooksData booksData) {
		return bookDataRepository.save(booksData);
	}
	public Optional<BooksData> getById(Long bookID) {
		return bookDataRepository.findById(bookID);
	}
	public String deleteBookById(Long bookId) {
		 bookDataRepository.deleteById(bookId);
		 return "record Deteled";
	}
	public String deleteAll(BooksData booksData) {
		bookDataRepository.deleteAll();
		return "All Data Deleted";
	}
}
