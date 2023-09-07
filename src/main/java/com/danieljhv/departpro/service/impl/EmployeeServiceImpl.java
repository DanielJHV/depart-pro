package com.danieljhv.departpro.service.impl;

import com.danieljhv.departpro.dto.EmployeeDto;
import com.danieljhv.departpro.exception.ResourceNotFoundException;
import com.danieljhv.departpro.mapper.EmployeeMapper;
import com.danieljhv.departpro.repository.EmployeeRepository;
import com.danieljhv.departpro.entity.Employee;
import com.danieljhv.departpro.service.EmployeeService;
import org.springframework.stereotype.Service;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("No employee available with that id: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
}
