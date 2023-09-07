package com.danieljhv.departpro.repository;

import com.danieljhv.departpro.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
