package edu.uob;

import java.util.*;

public class Tokeniser{
    private ArrayList<String>tokens = new ArrayList<>();

    String[] specialCharacters = {"(", ")", ",", ";", "=", "<", ">", "!"};
    public void setup(String query){
        query = query.trim();

        for(String s : specialCharacters){
            query = query.replace(s, " " + s + " ");
        }
        String[] rawTokens = query.split("\\s+");
        tokens.addAll(Arrays.asList(rawTokens));
    }

    public ArrayList<String> getTokens(){
        return tokens;
    }
}