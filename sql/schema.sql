CREATE TABLE fines (
  id SERIAL PRIMARY KEY,
  charge_code INT,
  legislation VARCHAR(255) NOT NULL,
  charge_wording VARCHAR(255) NOT NULL,
  offence_or_infringement VARCHAR(225) NOT NULL,
  penalty_units VARCHAR(255) NOT NULL,
  demerit_points INT NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  discounted_amount NUMERIC(10, 2),
  operator_charge INT,
  key_word VARCHAR(255)
);  