package aula_inatel.ProvaS206_L1_Karate;

import com.intuit.karate.junit5.Karate;

class ProvaRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("prova").relativeTo(getClass());
    }    

}

