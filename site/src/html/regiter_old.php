<?php>
  <form method="post" action="index.php" >    
     <div>
        <label for="name">Naam:</label>
        <input type="text" id="name" name="name" value="'. $data ["name"] .'" placeholder="Jan Klaassen">
        <span class="error"> '. $data ["nameErr"] .' </span>
    </div>
    <div>
    <label for="e-mail">E-mailadres:</label>
    <input type="email" id="e-mail" name="email" value="'. $data ["email"] .'">
    <span class="error"> '. $data ["emailErr"] .' </span>
    </div>
    <div>
    <label for="password">Wachtwoord:</label>
    <input type="tel" id="password" name="password" value="'. $data ["password"] .'">
    <span class="error"> '. $data ["passwordErr"] .' </span>
    </div>
    <div>
    <label for="passwordCheck">Wachtwoord herhaal:</label>
    <input type="tel" id="passwordCheck" name="passwordCheck" value="'. $data ["passwordCheck"] .'">
    <span class="error"> '. $data ["passwordCheckErr"] .' </span>
    </div>
      <input type="hidden" name="page" value="register">
    <div>
  <input type="submit" value="Verzend"> 
    </div>
</form>