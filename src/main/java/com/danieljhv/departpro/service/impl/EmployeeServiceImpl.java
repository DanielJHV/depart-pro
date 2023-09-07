package com.danieljhv.departpro.service.impl;

import com.danieljhv.departpro.dto.EmployeeDto;
import com.danieljhv.departpro.mapper.EmployeeMapper;
import com.danieljhv.departpro.repository.EmployeeRepository;
import com.danieljhv.departpro.entity.Employee;
import com.danieljhv.departpro.service.EmployeeService;
import org.springframework.stereotype.Service;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
}
