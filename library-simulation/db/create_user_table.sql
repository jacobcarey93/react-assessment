
CREATE TABLE IF NOT EXISTS users(
    userid SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);


-- how do datatypes affect databases? databases store different types of information slightly differently 
--     for example: storing an image as a BLOB stores the image as a binary object, incomparison, you could 
--     also store that image as a TEXT data type, which stores data as a massive string of any characters. 
--     both data types will store the image, but the user can only upload an image as a link, you would want to 
--     use the TEXT data type. 

