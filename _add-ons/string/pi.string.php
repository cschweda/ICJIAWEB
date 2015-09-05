<?php
class Plugin_string extends Plugin {

  public function replace() {
    $string  = $this->fetchParam('string', '');
    $pattern  = $this->fetchParam('pattern', '');
    $replacement  = $this->fetchParam('replacement', '');
    return preg_replace($pattern, $replacement, $string);
  }
}
