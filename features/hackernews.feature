Feature: Hacker News

Scenario: Hacker News Home Page

  Given I open Hacker News's home page
  Then the title is "Hacker News"
  And the Hacker News search form exists