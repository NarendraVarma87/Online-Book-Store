package com.projectbook.varma.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectbook.varma.model.BooksData;
import com.projectbook.varma.service.BookDataService;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins ="*")
public class BookDataController {
	@Autowired
	BookDataService bookDataService;
	@GetMapping("/get")
	public List<BooksData> getAllData(){
		return bookDataService.getAllData();
	}
	@PostMapping("/add")
	public BooksData insertBook(@RequestBody BooksData booksData) {
		return bookDataService.insertBook(booksData);
	}
	@GetMapping("/get/{bookId}")
	public Optional<BooksData> getById(@PathVariable Long bookId) {
		return bookDataService.getById(bookId);
	}
	@DeleteMapping("/remove/{bookId}")
	public String deleteBookById(@PathVariable Long bookId) {
		return bookDataService.deleteBookById(bookId);
	}
	@DeleteMapping("/deleteAll")
	public String deleteAll(@RequestBody BooksData booksData) {
		return bookDataService.deleteAll(booksData);
	}
}
