package com.projectbook.varma.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table
@Entity
@Data
public class BooksData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookId;
	@Column
	private String bookName;
	@Column
	private String bookUrl;
	@Column
	private String bookAuthor;
	@Column
	private String bookDate;
	@Column
	private String bookDescription;
	@Column
	private Long bookPrice;
	@Column
	private String genre;
}
