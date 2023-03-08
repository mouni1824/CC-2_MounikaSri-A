package com.mounika.bloodbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mounika.bloodbank.entity.Donor;

public interface DonorRepository extends JpaRepository<Donor, Integer> {

}
