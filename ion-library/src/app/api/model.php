<?php

class Model
{
    public static function getAuthorsList()
    {
        return (new DB())->getArrFromQuery(
            "SELECT id, name, country
            FROM authors
            order by name"
        );
    }

    public static function getBooks($authorId)
    {
        return (new DB())->getArrFromQuery(
            "SELECT id, name, genre, year
            FROM `books`
            WHERE author_id = $authorId ORDER BY name"
        );
    }

    public static function editAuthor($author)
    {
        return (new DB())->runQuery(
            "UPDATE authors SET name = '" . str_replace("'", "\'", $author['name']) . "',
            country = '" . str_replace("'", "\'", $author['country']) . "'
            WHERE id = " . $author['id']
        );
    }

    public static function addAuthor($author)
    {
        return (new DB())->runQuery(
            "INSERT INTO authors(name, country)
            VALUES('" . str_replace("'", "\'", $author['name']) . "', '" . str_replace("'", "\'", $author['country']) . "')"
        );
    }

    public static function removeAuthor($author)
    {
        return (new DB())->runQuery(
            "DELETE FROM authors
            WHERE id = " . $author['id']
        );
    }

    public static function editBook($book)
    {
        return (new DB())->runQuery(
            "UPDATE books SET name = '" . str_replace("'", "\'", $book['name']) . "',
            genre = '" . str_replace("'", "\'", $book['genre']) . "',
            year = '" . $book['year'] . "'
            WHERE id = " . $book['id']
        );
    }
}
