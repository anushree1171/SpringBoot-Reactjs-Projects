-- Create TaskApp database
CREATE DATABASE IF NOT EXISTS TaskApp;

-- Switch to TaskApp database
USE TaskApp;

-- Create Task table
CREATE TABLE IF NOT EXISTS Tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    status VARCHAR(100),
    taskAddedDate DATE,
    trash BOOLEAN DEFAULT FALSE
);

-- Insert data into Task table
INSERT INTO Tasks (name, description, category, status, taskAddedDate, trash)
VALUES
    ('Complete Project Proposal', 'Draft and finalize project proposal document.', 'Planning', 'Started', '2024-05-01', FALSE),
    ('Design User Interface', 'Create wireframes and mockups for the user interface.', 'Design', 'InProgress', '2024-05-02', FALSE),
    ('Develop Backend API', 'Implement RESTful APIs for backend functionality.', 'Development', 'InProgress', '2024-05-03', FALSE),
    ('Write Unit Tests', 'Create unit tests to ensure code quality.', 'Testing', 'Completed', '2024-05-04', FALSE),
    ('Review Codebase', 'Conduct peer code reviews for quality assurance.', 'Review', 'Completed', '2024-05-05', FALSE),
    ('Prepare Presentation', 'Prepare slides for project presentation.', 'Presentation', 'Started', '2024-05-06', FALSE),
    ('Update Documentation', 'Update project documentation with latest changes.', 'Documentation', 'InProgress', '2024-05-07', FALSE),
    ('Fix Bug in Login Module', 'Investigate and fix bug reported in the login module.', 'Bug Fixing', 'InProgress', '2024-05-08', FALSE),
    ('Deploy Application', 'Deploy application to production servers.', 'Deployment', 'Completed', '2024-05-09', FALSE),
    ('Client Meeting', 'Schedule and conduct meeting with client to gather requirements.', 'Meeting', 'Started', '2024-05-10', FALSE),
    ('Optimize Database Queries', 'Identify and optimize slow database queries.', 'Performance', 'InProgress', '2024-05-11', FALSE),
    ('Create Test Data', 'Generate test data for automated testing.', 'Testing', 'Completed', '2024-05-12', FALSE),
    ('Refactor Codebase', 'Refactor existing code for better maintainability.', 'Refactoring', 'InProgress', '2024-05-13', FALSE),
    ('Prepare Sprint Review', 'Prepare presentation and demo for sprint review meeting.', 'Review', 'Completed', '2024-05-14', FALSE),
    ('Document API Endpoints', 'Document all API endpoints for developer reference.', 'Documentation', 'Started', '2024-05-15', FALSE),
    ('Implement New Feature', 'Add new feature requested by the client.', 'Development', 'InProgress', '2024-05-16', FALSE),
    ('Run System Tests', 'Execute system tests to validate overall system functionality.', 'Testing', 'Completed', '2024-05-17', FALSE),
    ('Review User Feedback', 'Analyze user feedback and prioritize enhancements.', 'Review', 'Started', '2024-05-18', FALSE),
    ('Update Security Policies', 'Update security policies to address new vulnerabilities.', 'Security', 'InProgress', '2024-05-19', FALSE),
    ('Create User Guides', 'Create user guides for end-users.', 'Documentation', 'InProgress', '2024-05-20', FALSE),
    ('Perform Code Review', 'Review code submitted by team members.', 'Review', 'Completed', '2024-05-21', FALSE);
