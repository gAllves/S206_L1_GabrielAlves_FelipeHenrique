package aula_inatel.trabalhoAPI;

import com.intuit.karate.junit5.Karate;

class TrabalhoRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("trabalhoAPI").relativeTo(getClass());
    }    

}

