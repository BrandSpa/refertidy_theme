<?php

function responseJson($res = []) {
  header('Content-type: application/json');  
  echo json_encode($res);
}