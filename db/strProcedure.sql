CREATE PROCEDURE `employeeAddOrUpdate` (
  IN _id INT,
  IN _name VARCHAR(20),
  IN _position VARCHAR(20),
  IN _office VARCHAR(20),
  IN _salary INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO employees (name,position, office, salary)
    VALUES (_name,_position, _office, _salary);
    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE employees
    SET
    name = _name,
    office = _office,
    position = _position,
    salary = _salary
    WHERE id = _id;
  END IF;

END