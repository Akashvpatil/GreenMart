package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ImageDTO;


public interface IProductImageService {
	//ProductImage findByProductName(String pName, MultipartFile imageFile);
	
	//ProductImage getImageByName(String productName);
	
	//Added
	ImageDTO storeImage(String productName, MultipartFile imageFile);

	byte[] restoreImage(String productName) throws IOException;
	//Added
}
