package com.example.demo.post;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private static ArrayList<Post> posts = new ArrayList<>();
    private static int idCounter = 0;

    static {
        posts.add(new Post(idCounter++,
                "title1",
                "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                "Bacon ipsum dolor amet short ribs landjaeger bacon pig drumstick ham pork corned beef meatloaf " +
                        "cupim short loin tongue jowl kielbasa andouille. Jerky sausage pork tongue chuck fatback pork" +
                        " chop pig bacon swine meatloaf corned beef. Shankle chuck jowl, ball tip pork belly tail cow kielbasa" +
                        " landjaeger leberkas. Picanha pastrami tongue porchetta. Strip steak ball tip frankfurter turkey, kevin" +
                        " swine flank. Pork chop turkey shoulder, pork loin porchetta capicola shank strip steak cupim t-bone pancetta" +
                        " filet mignon doner drumstick meatball. Jerky spare ribs ham, sirloin turkey beef ribs andouille tenderloin strip steak landjaeger."));
    }

    public List<Post> getAll(){
        return posts;
    }

    public Post get(int id){
        return posts.get(id);
    }
}
