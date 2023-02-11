/*
https://leetcode.com/problems/duplicate-emails/

182. Duplicate Emails
Easy

SQL Schema
Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.

*/


# Write your MySQL query statement below
select Email from Person GROUP BY Email HAVING count(*) > 1;
-- Runtime: 319 ms, faster than 96.86% of MySQL online submissions for Duplicate Emails.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Duplicate Emails.

please review this link: https://chartio.com/learn/databases/how-to-find-duplicate-values-in-a-sql-table/
