# Assignment 1

1. Open `week-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
    There was problem with effective Date (It should be effectiveDate without space between effective and date).
    ![image info](../week-2/2.png)
    ![image info](../week-2/1.png)
2. What is the use of CDATA block in this document?


    CDATA is used to mark a section of XML Document and it is used here to escape some charachters otherwise it would be treat as a XML.
3. Add comment line to the end of file which contains you name and student id.
4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

  prolog : It is in the document
  document body : every information between tags known as document body
  epilog : final comments
  
  processing instruction inside assignment.xml file
  

5. Add inline DTD for this document.
6. Verify that file is well-formed and valid.
    ![image info](../week-2/1.png)
7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule

originalName { font-size: 14px; }

{ display: block; }
title{ color:red; font-weight: bold; } updated styles.css accordingly

updated assignment.xml and styles.css
