package com.lg.contributor.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseAddResponse {
	
	private Integer id;
	private String title;
	private String description;
	private Integer estimatedTime;
	private String username;

}
