-- Create RemaindersApp database
CREATE DATABASE IF NOT EXISTS TaskApp;

-- Switch to RemaindersApp database
USE TaskApp;

-- Create Remainder table
CREATE TABLE IF NOT EXISTS Remainders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    setOnDate DATE,
    date DATE NOT NULL,
    time TIME NOT NULL,
    status VARCHAR(100),
    trash BOOLEAN DEFAULT FALSE
);

-- Insert data into Remainder table
INSERT INTO Remainders (name, setOnDate, date, time, status, trash)
VALUES
    ('Meeting with Client', '2024-04-30', '2024-05-05', '09:30:00', 'notDone', FALSE),
    ('Submit Progress Report', '2024-05-09', '2024-05-10', '15:00:00', 'done', FALSE),
    ('Project Presentation', '2024-05-14', '2024-05-15', '11:00:00', 'notDone', FALSE),
    ('Team Meeting', '2024-05-07', '2024-05-08', '10:00:00', 'done', FALSE),
    ('Review Task Priorities', '2024-04-29', '2024-05-03', '14:30:00', 'notDone', FALSE),
    ('Training Session', '2024-05-08', '2024-05-12', '13:00:00', 'notDone', FALSE),
    ('Submit Expense Report', '2024-05-06', '2024-05-07', '16:30:00', 'done', FALSE),
    ('Client Call', '2024-05-08', '2024-05-09', '12:00:00', 'done', FALSE),
    ('Prepare Project Plan', '2024-04-29', '2024-05-02', '09:00:00', 'notDone', FALSE),
    ('Code Review', '2024-05-13', '2024-05-14', '10:30:00', 'done', FALSE),
    ('Task Assignment', '2024-05-05', '2024-05-06', '11:30:00', 'notDone', FALSE),
    ('Debugging Session', '2024-05-10', '2024-05-11', '14:00:00', 'notDone', FALSE),
    ('Project Update Meeting', '2024-05-15', '2024-05-16', '15:30:00', 'notDone', FALSE),
    ('Review Documentation', '2024-05-03', '2024-05-04', '16:00:00', 'done', FALSE),
    ('Submit Project Proposal', '2024-04-30', '2024-05-01', '10:00:00', 'done', FALSE),
    ('Product Demo', '2024-05-12', '2024-05-13', '11:00:00', 'done', FALSE),
    ('Team Building Activity', '2024-05-16', '2024-05-17', '13:00:00', 'notDone', FALSE),
    ('Performance Review', '2024-05-17', '2024-05-18', '09:30:00', 'notDone', FALSE),
    ('Submit Budget Proposal', '2024-05-19', '2024-05-20', '15:00:00', 'notDone', FALSE),
    ('Team Lunch', '2024-05-18', '2024-05-19', '12:30:00', 'notDone', FALSE);
    
    
show tables;

select * from tasks;
select * from remainders;
