<?php

class Controller
{
    private $data;
    private $action;
    private $protectedActions = ['get-authors', 'edit-author', 'add-author', 'del-author', 'get-books', 'get-book', 'edit-book'];

    function __construct()
    {
        $this->action = $_GET['action'];
        $this->data = json_decode(file_get_contents('php://input'), true);
    }

    function run()
    {
        $res = [];
        if (
            in_array($this->action, $this->protectedActions)
            && !Auth::checkToken($_GET['token'])
        ) {
            return ['error' => 'authentication failed!'];
        }
        switch ($this->action) {
            case 'login':
                $res = Auth::getUserToken($this->data);
                break;
            case 'get-authors':
                $res = Model::getAuthorsList();
                break;
            case 'edit-author':
                if (Model::editAuthor($this->data)) {
                    $res = ['update' => 'success'];
                } else {
                    $res = ['error' => 'authors update error!'];
                }
                break;
            case 'add-author':
                if (Model::addAuthor($this->data)) {
                    $res = ['insert' => 'success'];
                } else {
                    $res = ['error' => 'authors insert error!'];
                }
                break;
            case 'del-author':
                if (Model::removeAuthor($this->data)) {
                    $res = ['delete' => 'success'];
                } else {
                    $res = ['error' => 'authors delete error!'];
                }
                break;
            case 'get-books':
                $res = Model::getBooks($_GET['author']);
                break;
            case 'get-book':
                $res = Model::getBook($_GET['book']);
                break;
            case 'edit-book':
                if (Model::editBook($this->data)) {
                    $res = ['update' => 'success'];
                } else {
                    $res = ['error' => 'authors update error!'];
                }
                break;
            default:
                $res = ['error' => 'this route is incorrect!'];
                break;
        }
        echo json_encode($res);
    }
}
