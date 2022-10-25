CREATE TABLE `mall` (
  `id` string PRIMARY KEY,
  `veh_num` varchar(255),
  `time_in` integer,
  `time_out` integer,
  `credit` integer,
  `total_income` integer,
  `date` date,
  `veh_count` integer,
  `location` string
);

CREATE TABLE `user` (
  `user_id` string,
  `time_in` integer,
  `time_out` integer,
  `amt_deducted` integer,
  `phone_num` integer,
  `location` char,
  
);





