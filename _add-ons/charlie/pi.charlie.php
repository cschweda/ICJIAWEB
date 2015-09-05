<?php

require_once('config.php');

class Plugin_charlie extends Plugin {

  var $meta = array(
    'name'        => ADD_ON_NAME,
    'version'     => ADD_ON_V,
    'author'      => 'Curtis Blackwell',
    'author_url'  => 'http://curtisblackwell.com'
  );

  /**
   * Generate jQuery code for AJAX navigation.
   * @return string jQuery code
   */
  public function index() {
    // Parameters
    $class_active        = $this->fetch('class_active',        NULL,       FALSE, FALSE, FALSE);
    $class_active_parent = $this->fetch('class_active_parent', NULL,       FALSE, FALSE, FALSE);
    $content             = $this->fetch('content',             '#content', FALSE, FALSE, FALSE);
    $duration_in         = $this->fetch('duration_in',         400                            );
    $duration_out        = $this->fetch('duration_out',        400                            );
    $fx_in               = $this->fetch('fx_in',               'fadeIn',   FALSE, FALSE, FALSE);
    $fx_out              = $this->fetch('fx_out',              'fadeOut',  FALSE, FALSE, FALSE);
    $link_containers     = $this->fetch('link_containers',     '.nav',     FALSE, FALSE, FALSE);
    $pag_containers      = $this->fetch('pag_containers',      NULL,       FALSE, FALSE, FALSE);
    $script_tags         = $this->fetch('script_tags',         TRUE,       FALSE, TRUE,  FALSE);
    $trash               = $this->fetch('trash',               '#content', FALSE, FALSE, FALSE);


    // Should Charlie wrap his code in script tags?
    if ($script_tags) {
      $script_tag_open  = '<script type="text/javascript">';
      $script_tag_close = '</script>';
    } else {
      $script_tag_open  = NULL;
      $script_tag_close = NULL;
    }


    // Use $link_containers to create .js-usable selectors for links.
    $link_containers_arr = Helper::explodeOptions($link_containers);
    foreach ($link_containers_arr as $key => $value) {
      $link_containers_arr[$key] .= ' a';
    }
    $links = implode(',', $link_containers_arr);


    // If there are any pag_containers...
    if ($pag_containers) {
      // Use $pag_containers to create selectors for links usable in .js.
      $pag_containers_arr = Helper::explodeOptions($pag_containers);
      foreach ($pag_containers_arr as $key => $value) {
        $pag_containers_arr[$key] .= ' a';
      }
      $links_pag      = implode(',', $pag_containers_arr);
      $pag_containers = str_replace('|', ',', $pag_containers);
      $pag_init       = "initiateCharlieNav('" . $links_pag . "', '" . $pag_containers . "');";

      // Call initiateCharlieNav() on pagination links after they're loaded.
      $callback = "" .
        ", function() {
          initiateCharlieNav('" . $links_pag . "', '" . $pag_containers . "');
        }"
      ;

      // If both pag_containers and class_active are set,
      // Charlie should be careful not to remove class_active when inappropriate.
      //
      // Let's not have another incident like the one at the Christmas party freshman year, okay?
      if ($class_active) {
        // loadContent() will need a new argument.
        $update_class_arg = ", update_class";

        // Make sure to target the correct element.
        if ($class_active_parent) {
          $update_class_parent = ".parent()";
        } else {
          $update_class_parent = NULL;
        }

        $update_class_conditional_open  = "if (update_class) {";
        $update_class_conditional_close = "}";

        $update_class = "" .
          "var update_class = \$(this)" .
          $update_class_parent . ".siblings().hasClass('" . $class_active . "');";
      }
    } else {
      // Otherwise, set values to NULL
      $links_pag                      = NULL;
      $pag_init                       = NULL;
      $callback                       = NULL;
      $update_class_arg               = NULL;
      $update_class                   = NULL;
      $update_class_conditional_open  = NULL;
      $update_class_conditional_close = NULL;
    }


    // If the site dev wants to use an active class, generate the necessary code.
    if ($class_active) {
      // Use $link_containers_arr to create .js-usable selectors for potentially active links.
      foreach ($link_containers_arr as $key => $value) {
        $link_containers_arr[$key] .= '[href="\' + url + \'"]';
      }
      $links_active_potential = implode(',', $link_containers_arr);

      // Make sure class_active is getting applied to the correct element.
      if ($class_active_parent) {
        $class_active_parent = ".parent('" . $class_active_parent . "')";
      }

      $class_active = "" .
        $update_class_conditional_open .
          "$('" . $links . "')"  .
            $class_active_parent .
            ".removeClass('" . $class_active . "');
          $('" . $links_active_potential . "')"   .
            $class_active_parent                  .
            ".addClass('" . $class_active . "');" .
        $update_class_conditional_close
      ;
    }


    return $script_tag_open . "
      \$(function() {
        initiateCharlieNav('" . $links . "', '" . $trash . "');
        " . $pag_init . "
        first_load = true;

        window.onpopstate = function(event) {
          if (first_load == false) {
            loadContent(location.pathname+location.search, '" . $trash . "');
          };
        };
      });

      function loadContent(url, trash" . $update_class_arg . ") {
        var new_content_wrap = \$('<div>');
        first_load = false;

        new_content_wrap.hide().load(url + ' " . $content . "', function() {
          \$(trash)." . $fx_out . "('" . $duration_out . "', function() {
            \$(this).replaceWith(new_content_wrap);
            \$(new_content_wrap)
              ." . $fx_in . "('" . $duration_in . "'" . $callback . ");
          });
        });
        " . $class_active . "
      }

      function initiateCharlieNav(charlieLinks, trash) {
        \$(charlieLinks).click(function(e) {
          var url = \$(this).attr('href');
          " . $update_class . "

          e.preventDefault();
          loadContent(url, trash" . $update_class_arg . ");
          history.pushState(null, null, url);
        });
      }
    " . $script_tag_close;
  }

  /**
   * Check for AJAX request
   * @return boolean TRUE or FALSE
   */
  public function is_ajax() {
    $is_ajax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND
               strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

    if ($is_ajax) {
      return TRUE;
    } else {
      return FALSE;
    }
  }
}
