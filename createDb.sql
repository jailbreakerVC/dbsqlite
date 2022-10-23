CREATE TABLE `mall` (
  `id` char PRIMARY KEY,
  `veh_num` varchar(255),
  `time_in` integer,
  `time_out` integer,
  `credit` integer,
  `total_income` integer,
  `date` date,
  `veh_count` integer,
  `location` char
);

CREATE TABLE `user` (
  `user_id` char,
  `time_in` integer,
  `time_out` integer,
  `amt_deducted` integer,
  `phone_num` integer,
  `location` char,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES mall(id)
);



