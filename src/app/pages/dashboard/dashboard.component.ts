import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private appService: AppService) {}

  public cards:any = [
    {
      "title" : "Live Conversation Count",
      "total" : "3.6K"
    },
    {
      "title" : "Total Messages",
      "total" : "51.33K"
    },
    {
      "title" : "Total Send Messages",
      "total" : "30.62K"
    },
    {
      "title" : "Total Received Messages",
      "total" : "20.71K"
    },
    {
      "title" : "Total Conversations",
      "total" : "4.25K"
    },
    {
      "title" : "Average Session Length",
      "total" : "2.04Min"
    },
    {
      "title" : "Avg. conv. steps/user",
      "total" : "1.92K"
    },
    {
      "title" : "Avg. conv/user",
      "total" : "2.07"
    },
    {
      "title" : "Active Users",
      "total" : "1.5K"
    },
    {
      "title" : "New Users",
      "total" : "50"
    },
    {
      "title" : "Returning Users",
      "total" : "1.4K"
    },
    {
      
    }
  ]

  public books:any = [
    { "_id" : 634, "title" : "Redis in Action", "isbn" : "1617290858", "pageCount" : 0, "publishedDate" : { "$date" : "2013-06-18T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carlson.jpg", "status" : "PUBLISH", "authors" : [ "Josiah Carlson" ], "categories" : [] },
    { "_id" : 636, "title" : "Using the TI-83 Plus/TI-84 Plus", "isbn" : "161729084X", "pageCount" : 0, "publishedDate" : { "$date" : "2013-08-19T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell2.jpg", "status" : "PUBLISH", "authors" : [ "Christopher R. Mitchell" ], "categories" : [] },
    { "_id" : 637, "title" : "Neo4j in Action", "isbn" : "1617290769", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/partner.jpg", "status" : "MEAP", "authors" : [ "Jonas Partner", "Aleksa Vukotic", "", "Nicki Watt" ], "categories" : [] },
    { "_id" : 639, "title" : "Programming the TI-83 Plus/TI-84 Plus", "isbn" : "1617290777", "pageCount" : 0, "publishedDate" : { "$date" : "2012-09-14T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell.jpg", "status" : "PUBLISH", "authors" : [ "Christopher R. Mitchell" ], "categories" : [] },
    { "_id" : 640, "title" : "Functional Programming in Scala", "isbn" : "1617290653", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bjarnason.jpg", "status" : "MEAP", "authors" : [ "Paul Chiusano", "Rúnar Bjarnason" ], "categories" : [] },
    { "_id" : 641, "title" : "Play for Scala", "isbn" : "1617290793", "pageCount" : 0, "publishedDate" : { "$date" : "2013-10-03T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hilton.jpg", "status" : "PUBLISH", "authors" : [ "Peter Hilton", "Erik Bakker", "", "Francisco Canedo" ], "categories" : [] },
    { "_id" : 642, "title" : "Node.js in Practice", "isbn" : "1617290939", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/templier2.jpg", "status" : "MEAP", "authors" : [ "Alex Young", "Marc Harter" ], "categories" : [] },
    { "_id" : 643, "title" : "SonarQube in Action", "isbn" : "1617290955", "pageCount" : 0, "publishedDate" : { "$date" : "2013-10-30T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/papapetrou.jpg", "status" : "PUBLISH", "authors" : [ "G. Ann Campbell", "Patroklos P. Papapetrou" ], "categories" : [] },
    { "_id" : 644, "title" : "Windows Store App Development: C# and XAML", "isbn" : "1617290947", "pageCount" : 0, "publishedDate" : { "$date" : "2013-06-03T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown3.jpg", "status" : "PUBLISH", "authors" : [ "Peter M. Brown" ], "categories" : [] },
    { "_id" : 645, "title" : "Learn Windows IIS in a Month of Lunches", "isbn" : "1617290971", "pageCount" : 0, "publishedDate" : { "$date" : "2013-12-31T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/helmick.jpg", "status" : "PUBLISH", "authors" : [ "Jason C. Helmick" ], "categories" : [] },
    { "_id" : 646, "title" : "Mondrian in Action", "isbn" : "161729098X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/back.jpg", "status" : "PUBLISH", "authors" : [ "William Back", "Nicholas Goodman", "", "Julian Hyde" ], "categories" : [] },
    { "_id" : 648, "title" : "RabbitMQ in Depth", "isbn" : "1617291005", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roy.jpg", "status" : "MEAP", "authors" : [ "Gavin M. Roy" ], "categories" : [] },
    { "_id" : 649, "title" : "Akka in Action", "isbn" : "1617291013", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roestenburg.jpg", "status" : "MEAP", "authors" : [ "Raymond Roestenburg", "Rob Bakker", "Rob Williams", "Steven Haines" ], "categories" : [] },
    { "_id" : 650, "title" : "Extending jQuery", "isbn" : "161729103X", "pageCount" : 0, "publishedDate" : { "$date" : "2013-08-12T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wood.jpg", "status" : "PUBLISH", "authors" : [ "Keith B. Wood" ], "categories" : [] },
    { "_id" : 651, "title" : "OCA Java SE 7 Programmer I Certification Guide", "isbn" : "1617291048", "pageCount" : 0, "publishedDate" : { "$date" : "2013-04-02T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta.jpg", "status" : "PUBLISH", "authors" : [ "Mala Gupta" ], "categories" : [] },
    { "_id" : 652, "title" : "Kanban in Action", "isbn" : "1617291056", "pageCount" : 0, "publishedDate" : { "$date" : "2014-03-04T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hammarberg.jpg", "status" : "PUBLISH", "authors" : [ "Marcus Hammarberg", "Joakim Sunden" ], "categories" : [] },
    { "_id" : 653, "title" : "Solr in Action", "isbn" : "1617291021", "pageCount" : 0, "publishedDate" : { "$date" : "2014-03-25T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grainger.jpg", "status" : "PUBLISH", "authors" : [ "Trey Grainger", "Timothy Potter" ], "categories" : [] },
    { "_id" : 655, "title" : "Making Sense of NoSQL", "isbn" : "1617291072", "pageCount" : 0, "publishedDate" : { "$date" : "2013-09-03T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mccreary.jpg", "status" : "PUBLISH", "authors" : [ "Daniel G. McCreary", "Ann M. Kelly" ], "categories" : [] },
    { "_id" : 656, "title" : "Jaguar Development with PowerBuilder 7", "isbn" : "1884777864", "pageCount" : 0, "publishedDate" : { "$date" : "1999-08-09T00:00:00.000-0700" }, "status" : "PUBLISH", "authors" : [ "MIchael Barlotta" ], "categories" : [] },
    { "_id" : 657, "title" : "Grails in Action, Second Edition", "isbn" : "1617290963", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith2.jpg", "status" : "MEAP", "authors" : [ "Glen Smith", "Peter Ledbrook" ], "categories" : [] },
    { "_id" : 658, "title" : "Rails 4 in Action", "isbn" : "1617291099", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bigg2.jpg", "status" : "MEAP", "authors" : [ "Ryan Bigg", "Yehuda Katz", "and Steve Klabnik", "" ], "categories" : [] },
    { "_id" : 659, "title" : "Learn Windows PowerShell in a Month of Lunches, Second Edition", "isbn" : "1617291080", "pageCount" : 0, "publishedDate" : { "$date" : "2012-11-12T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones3.jpg", "status" : "PUBLISH", "authors" : [ "Don Jones", "Jeffery D. Hicks" ], "categories" : [] },
    { "_id" : 662, "title" : "AOP in .NET", "isbn" : "1617291145", "pageCount" : 0, "publishedDate" : { "$date" : "2013-06-21T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/groves.jpg", "status" : "PUBLISH", "authors" : [ "Matthew D. Groves" ], "categories" : [] },
    { "_id" : 663, "title" : "Learn PowerShell Toolmaking in a Month of Lunches", "isbn" : "1617291161", "pageCount" : 0, "publishedDate" : { "$date" : "2012-12-12T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones4.jpg", "status" : "PUBLISH", "authors" : [ "Don Jones", "Jeffery Hicks" ], "categories" : [] },
    { "_id" : 664, "title" : "CMIS and Apache Chemistry in Action", "isbn" : "1617291153", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mueller.jpg", "status" : "PUBLISH", "authors" : [ "Florian Müller", "Jay Brown", "Jeff Potts" ], "categories" : [] },
    { "_id" : 667, "title" : "Action Guide (aka VB .NET)", "isbn" : "1930110324", "pageCount" : 0, "status" : "PUBLISH", "authors" : [ "Paul Messick" ], "categories" : [] },
    { "_id" : 670, "title" : "Learn Active Directory Management in a Month of Lunches", "isbn" : "1617291196", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway3.jpg", "status" : "PUBLISH", "authors" : [ "Richard Siddaway" ], "categories" : [] },
    { "_id" : 671, "title" : "Spring in Action, Fourth Edition", "isbn" : "161729120X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls5.jpg", "status" : "MEAP", "authors" : [ "Craig Walls" ], "categories" : [] },
    { "_id" : 672, "title" : "The Mikado Method", "isbn" : "1617291218", "pageCount" : 0, "publishedDate" : { "$date" : "2014-03-05T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ellnestam.jpg", "status" : "PUBLISH", "authors" : [ "Ola Ellnestam", "Daniel Brolund" ], "categories" : [] },
    { "_id" : 676, "title" : "The Responsive Web", "isbn" : "1617291242", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carver.jpg", "status" : "MEAP", "authors" : [ "Matthew Carver" ], "categories" : [] },
    { "_id" : 677, "title" : "Fast ASP.NET Websites", "isbn" : "1617291250", "pageCount" : 0, "publishedDate" : { "$date" : "2013-08-29T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hume.jpg", "status" : "PUBLISH", "authors" : [ "Dean Alan Hume" ], "categories" : [] },
    { "_id" : 678, "title" : "SBT in Action", "isbn" : "1617291277", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth2.jpg", "status" : "MEAP", "authors" : [ "Joshua Suereth", "Matthew Farwell" ], "categories" : [] },
    { "_id" : 679, "title" : "PowerShell Deep Dives", "isbn" : "1617291315", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hicks.jpg", "status" : "PUBLISH", "authors" : [ "Edited by Jeffery Hicks", "Richard Siddaway", "Oisin Grehan", "", "Aleksandar Nikolic" ], "categories" : [] },
    { "_id" : 680, "title" : "Gradle in Action", "isbn" : "1617291307", "pageCount" : 0, "publishedDate" : { "$date" : "2014-02-18T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/muschko.jpg", "status" : "PUBLISH", "authors" : [ "Benjamin Muschko" ], "categories" : [] },
    { "_id" : 681, "title" : "Scalatra in Action", "isbn" : "1617291293", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carrero2.jpg", "status" : "MEAP", "authors" : [ "Ivan Porto Carrero", "Ross A. Baker", "Dave Hrycyszyn", "Stefan Ollinger", "", "Jared Armstrong" ], "categories" : [] },
    { "_id" : 683, "title" : "AngularJS in Action", "isbn" : "1617291331", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bford.jpg", "status" : "MEAP", "authors" : [ "Brian Ford", "Lukas Ruebbelke" ], "categories" : [] },
    { "_id" : 684, "title" : "Software Development Metrics", "isbn" : "1617291358", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nicolette.jpg", "status" : "MEAP", "authors" : [ "David Nicolette" ], "categories" : [] },
    { "_id" : 685, "title" : "F# Deep Dives", "isbn" : "1617291323", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek_trelford.jpg", "status" : "MEAP", "authors" : [ "Tomas Petricek", "Phillip Trelford" ], "categories" : [] },
    { "_id" : 686, "title" : "C# in Depth, Third Edition", "isbn" : "161729134X", "pageCount" : 0, "publishedDate" : { "$date" : "2013-09-19T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet3.jpg", "status" : "PUBLISH", "authors" : [ "Jon Skeet" ], "categories" : [] },
    { "_id" : 688, "title" : "PostGIS in Action, Second Edition", "isbn" : "1617291390", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe2.jpg", "status" : "MEAP", "authors" : [ "Regina Obe", "Leo Hsu" ], "categories" : [] },
    { "_id" : 689, "title" : "R in Action, Second Edition", "isbn" : "1617291382", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff2.jpg", "status" : "MEAP", "authors" : [ "Robert Kabacoff" ], "categories" : [] },
    { "_id" : 691, "title" : "The Joy of Clojure, Second Edition", "isbn" : "1617291412", "pageCount" : 0, "publishedDate" : { "$date" : "2014-05-29T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fogus2.jpg", "status" : "PUBLISH", "authors" : [ "Michael Fogus", "Chris Houser" ], "categories" : [] },
    { "_id" : 692, "title" : "iOS 7 in Action", "isbn" : "1617291420", "pageCount" : 0, "publishedDate" : { "$date" : "2014-04-03T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lim2.jpg", "status" : "PUBLISH", "authors" : [ "Brendan G. Lim", "Martin Conte Mac Donell" ], "categories" : [] },
    { "_id" : 693, "title" : "Hello App Inventor!", "isbn" : "1617291439", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/beer.jpg", "status" : "MEAP", "authors" : [ "Paula Beer", "Carl Simmons" ], "categories" : [] },
    { "_id" : 696, "title" : "Ember.js in Action", "isbn" : "1617291455", "pageCount" : 0, "publishedDate" : { "$date" : "2014-06-10T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeie.jpg", "status" : "PUBLISH", "authors" : [ "Joachim Haagen Skeie" ], "categories" : [] },
    { "_id" : 697, "title" : "Netty in Action", "isbn" : "1617291471", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/maurer.jpg", "status" : "MEAP", "authors" : [ "Norman Maurer", "Courtney Robinson" ], "categories" : [] },
    { "_id" : 699, "title" : "RavenDB in Action", "isbn" : "1617291501", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/syn-hershko.jpg", "status" : "MEAP", "authors" : [ "Itamar Syn-Hershko" ], "categories" : [] },
    { "_id" : 700, "title" : "OCP Java SE 7 Programmer II Certification Guide", "isbn" : "161729148X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta2.jpg", "status" : "MEAP", "authors" : [ "Mala Gupta" ], "categories" : [] },
    { "_id" : 702, "title" : "Backbone.js in Action", "isbn" : "1617291536", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/breed.jpg", "status" : "MEAP", "authors" : [ "Samuel M. Breed", "Cole Krumbholz", "", "Phillip Whisenhunt" ], "categories" : [] },
    { "_id" : 703, "title" : "Clojure in Action, Second Edition", "isbn" : "1617291528", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore2.jpg", "status" : "MEAP", "authors" : [ "Amit Rathore" ], "categories" : [] },
    { "_id" : 706, "title" : "Practical Data Science with R", "isbn" : "1617291560", "pageCount" : 0, "publishedDate" : { "$date" : "2014-04-02T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zumel.jpg", "status" : "PUBLISH", "authors" : [ "Nina Zumel", "John Mount" ], "categories" : [] },
    { "_id" : 707, "title" : "Secrets of the JavaScript Ninja pBook upgrade", "pageCount" : 0, "status" : "PUBLISH", "authors" : [], "categories" : [] },
    { "_id" : 711, "title" : "ArcGIS Web Development", "isbn" : "1617291617", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rubalcava.jpg", "status" : "MEAP", "authors" : [ "Rene Rubalcava" ], "categories" : [] },
    { "_id" : 712, "title" : "Elasticsearch in Action", "isbn" : "1617291625", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hinman.jpg", "status" : "MEAP", "authors" : [ "Radu Gheorghe", "Matthew Lee Hinman" ], "categories" : [] },
    { "_id" : 716, "title" : "Learn SCCM 2012 in a Month of Lunches", "isbn" : "1617291684", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bannan.jpg", "status" : "MEAP", "authors" : [ "James Bannan" ], "categories" : [] },
    { "_id" : 717, "title" : "Programming for Musicians and Digital Artists", "isbn" : "1617291706", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kapur.jpg", "status" : "MEAP", "authors" : [ "Ajay Kapur", "Perry Cook", "Spencer Salazar", "", "Ge Wang" ], "categories" : [] },
    { "_id" : 719, "title" : "BDD in Action", "isbn" : "161729165X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smart.jpg", "status" : "MEAP", "authors" : [ "John F. Smart" ], "categories" : [] },
    { "_id" : 723, "title" : "Windows Phone 8 in Action", "isbn" : "1617291374", "pageCount" : 0, "publishedDate" : { "$date" : "2013-12-31T00:00:00.000-0800" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/binkley.jpg", "status" : "PUBLISH", "authors" : [ "Timothy Binkley-Jones", "Massimo Perga", "Michael Sync", "Adam Benoit" ], "categories" : [] },
    { "_id" : 724, "title" : "Titanium Alloy in Action", "isbn" : "1617291749", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alcocer.jpg", "status" : "MEAP", "authors" : [ "Ricardo Alcocer" ], "categories" : [] },
    { "_id" : 727, "title" : "Giraph in Action", "isbn" : "1617291757", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/martella.jpg", "status" : "MEAP", "authors" : [ "Claudio Martella", "Roman Shaposhnik", "", "Dionysios Logothetis" ], "categories" : [] },
    { "_id" : 728, "title" : "The Well-Grounded Rubyist, Second Edition", "isbn" : "1617291692", "pageCount" : 0, "publishedDate" : { "$date" : "2014-06-24T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black3.jpg", "status" : "PUBLISH", "authors" : [ "David A. Black" ], "categories" : [] },
    { "_id" : 729, "title" : "Go in Action", "isbn" : "1617291781", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ketelsen.jpg", "status" : "MEAP", "authors" : [ "Brian Ketelsen", "Erik St. Martin", "", "William Kennedy" ], "categories" : [] },
    { "_id" : 731, "title" : "The Programmer's Guide to Apache Thrift ", "isbn" : "1617291811", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/abernethy.jpg", "status" : "MEAP", "authors" : [ "Randy Abernethy" ], "categories" : [] },
    { "_id" : 732, "title" : "Grokking Functional Programming", "isbn" : "1617291838", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/khan.jpg", "status" : "MEAP", "authors" : [ "Aslam Khan" ], "categories" : [] },
    { "_id" : 733, "title" : "CORS in Action", "isbn" : "161729182X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hossain.jpg", "status" : "MEAP", "authors" : [ "Monsur Hossain" ], "categories" : [] },
    { "_id" : 736, "title" : "Reactive Design Patterns", "isbn" : "1617291803", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuhn.jpg", "status" : "MEAP", "authors" : [ "Roland Kuhn", "Jamie Allen" ], "categories" : [] },
    { "_id" : 740, "title" : "Storm Applied", "isbn" : "1617291897", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pathirana.jpg", "status" : "MEAP", "authors" : [ "Sean Allen", "Peter Pathirana", "", "Matthew Jankowski" ], "categories" : [] },
    { "_id" : 743, "title" : "Real-World Machine Learning", "isbn" : "1617291927", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brink.jpg", "status" : "MEAP", "authors" : [ "Henrik Brink", "Joseph Richards" ], "categories" : [] },
    { "_id" : 744, "title" : "jQuery UI in Action", "isbn" : "1617291935", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vantoll.jpg", "status" : "MEAP", "authors" : [ "Theodore J. (T.J.) VanToll III" ], "categories" : [] },
    { "_id" : 746, "title" : "Web Components in Action", "isbn" : "1617291943", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett2.jpg", "status" : "MEAP", "authors" : [ "Chris Buckett" ], "categories" : [] },
    { "_id" : 748, "title" : "JavaScript Application Design", "isbn" : "1617291951", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bevacqua.jpg", "status" : "MEAP", "authors" : [ "Nicolas G. Bevacqua" ], "categories" : [] },
    { "_id" : 749, "title" : "Git in Practice", "isbn" : "1617291978", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcquaid.jpg", "status" : "MEAP", "authors" : [ "Mike McQuaid" ], "categories" : [] },
    { "_id" : 750, "title" : "Impala in Action", "isbn" : "1617291986", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/saltzer.jpg", "status" : "MEAP", "authors" : [ "Richard L. Saltzer", "Istvan Szegedi" ], "categories" : [] },
    { "_id" : 751, "title" : "Java 8 in Action", "isbn" : "1617291994", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/urma.jpg", "status" : "MEAP", "authors" : [ "Raoul-Gabriel Urma", "Mario Fusco", "", "Alan Mycroft" ], "categories" : [] },
    { "_id" : 753, "title" : "Elixir in Action", "isbn" : "161729201X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/juric.jpg", "status" : "MEAP", "authors" : [ "Saša Juric´" ], "categories" : [] },
    { "_id" : 755, "title" : "MongoDB in Action, Second Edition", "isbn" : "1617291609", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status" : "MEAP", "authors" : [ "Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "", "Douglas Garrett" ], "categories" : [] },
    { "_id" : 757, "title" : "Getting MEAN with Mongo, Express, Angular, and Node", "isbn" : "1617292036", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status" : "MEAP", "authors" : [ "Simon Holmes" ], "categories" : [] },
    { "_id" : 761, "title" : "jQuery in Action, Third Edition", "isbn" : "1617292079", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/derosa.jpg", "status" : "MEAP", "authors" : [ "Bear Bibeault", "Yehuda Katz", "", "Aurelio De Rosa" ], "categories" : [] },
    { "_id" : 764, "title" : "D3.js in Action", "isbn" : "1617292117", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/meeks.jpg", "status" : "MEAP", "authors" : [ "Elijah Meeks" ], "categories" : [] },
    { "_id" : 765, "title" : "Learn SQL Server Administration in a Month of Lunches", "isbn" : "1617292133", "pageCount" : 0, "publishedDate" : { "$date" : "2014-05-02T00:00:00.000-0700" }, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones5.jpg", "status" : "PUBLISH", "authors" : [ "Don Jones" ], "categories" : [] },
    { "_id" : 766, "title" : "Geoprocessing with Python", "isbn" : "1617292141", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garrard.jpg", "status" : "MEAP", "authors" : [ "Chris Garrard" ], "categories" : [] },
    { "_id" : 767, "title" : "Barcodes with iOS", "isbn" : "161729215X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drobnik.jpg", "status" : "MEAP", "authors" : [ "Oliver Drobnik" ], "categories" : [] },
    { "_id" : 771, "title" : "Chef in Action", "isbn" : "1617292214", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/aivaliotis.jpg", "status" : "MEAP", "authors" : [ "Dimitri Aivaliotis" ], "categories" : [] },
    { "_id" : 772, "title" : "Hadoop in Practice, Second Edition", "isbn" : "1617292222", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes2.jpg", "status" : "MEAP", "authors" : [ "Alex Holmes" ], "categories" : [] },
    { "_id" : 774, "title" : "Oculus Rift in Action", "isbn" : "1617292192", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bdavis.jpg", "status" : "MEAP", "authors" : [ "Bradley Austin Davis", "Karen Bryla", "", "Alex Benton" ], "categories" : [] },
    { "_id" : 776, "title" : "OpenStack in Action", "isbn" : "1617292168", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bumgardner.jpg", "status" : "MEAP", "authors" : [ "Cody Bumgardner" ], "categories" : [] },
    { "_id" : 777, "title" : "PowerShell in Depth, Second Edition", "isbn" : "1617292184", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones6.jpg", "status" : "MEAP", "authors" : [ "Don Jones", "Jeffery Hicks", "", "Richard Siddaway" ], "categories" : [] },
    { "_id" : 785, "title" : "Practical Probabilistic Programming", "isbn" : "1617292338", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pfeffer.jpg", "status" : "MEAP", "authors" : [ "Avi Pfeffer" ], "categories" : [] },
    { "_id" : 786, "title" : "Unity in Action", "isbn" : "161729232X", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg", "status" : "MEAP", "authors" : [ "Joseph Hocking" ], "categories" : [] },
    { "_id" : 794, "title" : "Express.js in Action", "isbn" : "1617292427", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg", "status" : "MEAP", "authors" : [ "Evan M. Hahn" ], "categories" : [] },
    { "_id" : 795, "title" : "Learn Git in a Month of Lunches", "isbn" : "1617292419", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status" : "MEAP", "authors" : [ "Rick Umali" ], "categories" : [] },
    { "_id" : 796, "title" : "Understanding SPAs", "isbn" : "1617292435", "pageCount" : 0, "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scott2.jpg", "status" : "MEAP", "authors" : [ "Emmit A. Scott", "Jr." ], "categories" : [] }
  ];

  ngOnInit(): void {
    this.appService.triggerResizeEvent();
  }
}

