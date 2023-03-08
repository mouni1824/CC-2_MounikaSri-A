package com.mounika.bloodbank.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mounika.bloodbank.entity.Donor;
import com.mounika.bloodbank.repository.DonorRepository;

@Service
public class DService {
    
	@Autowired
	   private DonorRepository d;
	   
	   
	   public Donor saveDetails(Donor s) {
		   return d.save(s);
	   }


	   public List<Donor> getAllDetails() {
		
			   return d.findAll();
	   }


	   public void updatestudent(Donor s) {
		   d.saveAndFlush(s);
	   }


	   public void deleteDonorById(int id) {
		
		   d.deleteById(id);
		 
	   }
	   
	   
	   
}
