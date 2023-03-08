package com.mounika.bloodbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mounika.bloodbank.entity.Donor;
import com.mounika.bloodbank.service.DService;

@CrossOrigin("http://localhost:3001")
@RestController
public class DController {
	
	@Autowired
	private DService dservice;
	
	@PostMapping("/store")
	public String saveDetails(@RequestBody Donor s)
	{
	  dservice.saveDetails(s);
		return "data added";
	}
	
	@GetMapping("/get")
	public List<Donor> getAllDetails()
	{
		return dservice.getAllDetails();
	}
	
	@PutMapping("/update")	
	public String updatedetails(@RequestBody Donor s)
	{
		dservice.updatestudent(s);
		return "values Updated";
	}
	
	@DeleteMapping("/del/{id}")
	public String deleteDetails(@PathVariable("id") int id){
			dservice.deleteDonorById(id);
			return "deleted";
	}

}
