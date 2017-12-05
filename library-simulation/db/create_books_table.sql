CREATE TABLE IF NOT EXISTS books (
bookid SERIAL PRIMARY KEY, 
image TEXT,
title TEXT,
author TEXT,
genre TEXT,
description TEXT,
in_stock BOOLEAN)