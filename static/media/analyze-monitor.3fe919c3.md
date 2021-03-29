# Analyze and Monitor

![A picture containing meter Description automatically
generated](./img/media/image1.jpeg)

*With Automated AI Lifecycle – Trust the model*

Before we can get to creating models, we need to follow multiple steps
described in the following diagram.

![A screenshot of a social media post Description automatically
generated](./img/media/image2.jpeg)

The business problem has been defined and we’ve been through the data
requirements, data collection, data understanding and data preparation.

The data has been catalogued and secured. Once the data was been better
understood, we were able to identify the attributes needed. They
are:

| POSITION\_CODE     | DEPARTMENT\_CODE      | DAYS\_WITH\_COMPANY      | COMMUTE\_TIME       |
| ------------------ | --------------------- | ------------------------ | ------------------- |
| AGE\_BEGIN\_PERIOD | GENDER\_CODE          | ATTRITION                | PERIOD\_TOTAL\_DAYS |
| STARTING\_SALARY   | ENDING\_SALARY        | NB\_INCREASES            | BONUS               |
| NB\_BONUS          | VACATION\_DAYS\_TAKEN | SICK\_DAYS\_TAKEN        | PROMOTIONS          |
| NB\_MANAGERS       | DAYS\_IN\_POSITION    | DAYS\_SINCE\_LAST\_RAISE | RANKING\_CODE       |
| OVERTIME           | DBLOVERTIME           | TRAVEL                   | NUMBER\_OF\_CLASSES |

There are a few things we need to know about these attributes. First the
data comes from multiple tables. Some lookup tables were also used to
identify the proper codes but were not needed to generate the data
required.

![A screenshot of a social media post Description automatically
generated](./img/media/image3.jpeg)

Second, many of these attributes refer to a specific timeframe. Either
the timeframe of the analysis (calendar year), from the hiring date to
the end date, or since the last raise or last promotion. Then, in the
case of the employees that left, the main time period is one year prior
to the termination date.

All this to say that collecting the attributes is complex. As a **data
scientist**, we need to work with the **data engineering team** to make
the data easily available. The **data engineer** generated a table,
MODELING\_RECORDS, that includes the information requested. Then, the
data engineer needs to **schedule regular jobs** to generate new records
every year.

### Getting Modeling Records

The model we want to create is an attrition model. create a model, we
cannot simply use the MODELING\_RECORDS table. We need to extract the
records to have a **reasonable ratio of records** between the ATTRITION
and the NON-ATTRITION records. For this we again work with the data
engineering team to generate appropriate csv files for each available
year.

To get an idea of the complexity of data engineering, let’s take a look
at the “Create the Modeling Table” notebook that shows how the
MODELING\_RECORDS table is populated and how we generate the csv files.

## 1\. Setup – Creating a project

If you have not done so, please create a project named “Employee
Attrition”.

If you already have this project, you can move on to the next lab.

![A picture containing drawing Description automatically
generated](./img/media/image4.jpeg)

1.  From the Cloud Pak home screen, click Projects in quick
    navigation.

    ![A close up of a logo Description automatically
    generated](./img/media/image5.jpeg)

2.  Click New project.

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image6.jpeg)

3.  Click Next

4.  Click Create an empty project

5.  Give it the name “**Employee Attrition**”, then click Create

You are ready to move to the next lab.

## 1b. Setup – Adding assets to your project

In this section, we add the assets needed for the rest of the labs. For
this, we need to access the catalog.

![A screenshot of a cell phone Description automatically
generated](./img/media/image7.jpeg)

1.  From the navigation menu, click All catalogs:

2.  Click the SmarterElectronics catalog

    ![A picture containing screenshot Description automatically
    generated](./img/media/image8.jpeg)

3.  Locate and add the **Db2 Advanced Edition** connection to your
    project

4.  Follow the same approach for the following assets:  
    \- **notebook Lab 2 – Data Engineering**  
    \- **modeling\_data\_2020.csv**  
    \- \<what else?\>

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image9.jpeg)

5.  Return to your project by selecting **Projects** from the navigation
    menu  
    and then open your project.

This completes the setup phase of the lab.

## 2\. Data Engineering preview

In this section, we get an appreciation for the data engineering done.
We already know that data needs to be collected and catalogued. The
following notebook shows how the MODELING\_RECORDS table was created and
how training records can be created.

![A close up of a logo Description automatically
generated](./img/media/image10.jpeg)

1.  Open the **Lab 2 – Data Engineering** notebook by clicking the
    pencil icon

    Follow the instructions in the notebook and execute all the cells.

There were four files created in the notebook. You can optionally add
them to the project by using the “find and add Data” from the project
Asset page.

You are ready to move on to the next lab.

## 3\. Model Monitoring

MBI already has a running predictive model to evaluate an employee
attrition risk. However, with COVID-19 affecting commute time, amount of
overtime worked, and many other features the model uses to predict which
employees may leave the company, we should check and see how the model
deals with this data drift.

![](./img/media/image11.png)

Return to the Cloud Pak for Data home screen by clicking the link.

![Graphical user interface, application Description automatically
generated](./img/media/image12.png)

Locate the **Model Monitoring** section and click the **Deployments
monitored** link to open Watson OpenScale in a new browser tab. The
OpenScale Insights Dashboard shows a quick overview of all the models
currently being monitored. The model had been performing well, as shown
by its quality score, but rapidly-changing conditions brought on by
COVID-19 may be affecting it.

![Graphical user interface, application Description automatically
generated](./img/media/image13.png)

Locate and click the tile for the **predictive attrition – 2018** model.

![Graphical user interface, text, application Description automatically
generated](./img/media/image14.png)

An alert is showing for the drift monitor, which indicates that
OpenScale has detected a potential issue that could affect model
accuracy. Click on the drift score.

![A picture containing text Description automatically
generated](./img/media/image15.png)

The graph shows a predicted drop in model accuracy based on the
characteristics of the data being sent to the model. The predicted drop
is greater than the threshold MBI has configured for an alert, shown as
the red line. Click on a point on the graph for more information.

![Graphical user interface, text, application Description automatically
generated](./img/media/image16.png)

Select **Transactions responsible for drop in accuracy** to view which
characteristics are affecting the model.

![Graphical user interface, application Description automatically
generated](./img/media/image17.png)

OpenScale has grouped the transactions based on which features are
influencing the model, helping catch and fix issues in real time as the
model makes predictions, and without the need for gathering additional
ground truth feedback data. Note that the amount of overtime and the
commute time are listed as influencing many of the different groups.
These values are likely the new key drivers of our attrition problem, as
the workers most affected by them are the warehouse employees. Leave the
browser tab with OpenScale open, and continue to Lab 4.

## 4\. Creating and deploying an AutoAI model

We saw in the previous lab that our model needs to be refreshed using
newer data to better fit reality. We have to consider that, because of
COVID-19, many employees now work from home, so commute time is less of
an issue for most employees. Additionally, COVID-19 has produced a huge
surge in online orders, increasing the amount of overtime required for
warehouse employees.

![](./img/media/image18.jpeg)

2.  In your project, click Add to project

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image19.jpeg)

3.  Click AutoAI Experiment

4.  Give it the name “**AutoAI Attrition 2020**”, then click Create

    ![](./img/media/image20.jpeg)

5.  Click “Select from project”

6.  Click “**modeling\_records\_2020**”, click “select asset”

7.  Click the ATTRITION column name  
    At this point, AutoAI figures out it is a binary classification
    problem.

    ![](./img/media/image21.jpeg)

8.  Click Experiment settings

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image22.jpeg)

9.  In the training data split, bring the ration to 85%

10. Scroll down to the list of columns and uncheck:  
    CURRENT\_YEAR, EMPLOYEE\_CODE and PERIOD\_TOTAL\_DAYS.

    ![](./img/media/image23.jpeg)

    ![A picture containing drawing Description automatically
    generated](./img/media/image24.jpeg)

11. Click Save settings

    ![](./img/media/image25.jpeg)

12. Click Run experiment  
    This step creates and evaluate 8 models. This can take three to five
    minutes to complete.

13. Scroll down to see the list of available models

> At this point, we can explore the top pipeline to see its
> characteristics. A quick view is available by clicking on the caret
> before the rank. We can get more details by clicking on the pipeline
> row.
>
> ![](./img/media/image26.jpeg)

1.  Once you are done exploring, click Back to AutoAI Attrition 2020.

> We are ready to save the model.
>
> ![A screenshot of a cell phone Description automatically
> generated](./img/media/image27.jpeg)

2.  Put your cursor on the top pipeline line, click Save as then Model

    ![Graphical user interface, text, application Description
    automatically generated](./img/media/image28.png)

3.  Change the name to your login name plus “AutoAI Attrition 2020
    Model”, then click Save.

4.  Click View in Project

> We now have a project saved in our environment. We now want to promote
> the model to the deployment space.
>
> ![](./img/media/image29.jpeg)

1.  Click Promote to deployment space

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image30.jpeg)

2.  If there is no deployment space associated with this project, we
    need to associate one with it.

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image31.jpeg)

3.  Give it a name that includes your login name, then click Associate  
    After the deployment space creation, we are back to the model
    screen.

4.  Click **Promote to deployment space** again, then click **Promote to
    space**.

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image32.jpeg)

5.  In the navigation menu, click Analytics deployments

6.  Click your deployment space name

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image33.jpeg)

7.  Click the Access control tab, then click Add collaborators  
    ![Graphical user interface, text, application, Teams Description
    automatically generated](./img/media/image34.png)

8.  Enter the collaborator name **admin**. Select admin(--) from the
    list, keep the role as Admin, and click **Add to list**.

9.  Click Add  
    ![Graphical user interface, application Description automatically
    generated](./img/media/image35.png)

10. Click the **Assets** tab, then click the **\<login name\> AutoAI
    Attrition 2020 Model**

    ![](./img/media/image36.jpeg)

11. Click **Create deployment**

12. Click **Online** for Online deployment

13. Give the deployment a name that contains your login, such as
    **emartens Attrition 2020 deployment**, then click **Create**

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image37.jpeg)

    The status will change from **In progress** to **Deployed**

> We now have a deployed model. We can move on to the next lab, where we
> use OpenScale to test its accuracy and drift tolerance.

## 5\. Setting up the monitoring of the new model

Return to the OpenScale browser tab.

![Graphical user interface, text, application Description automatically
generated](./img/media/image38.png)

Click the icon for OpenScale settings.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image39.png)

Select **Machine learning providers**.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image40.png)

Click **Add machine learning provider**.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image41.png)

Click the edit icon, and give your provider a name that includes your
login.

![Graphical user interface, application Description automatically
generated](./img/media/image42.png)

Click **Apply**.

![Graphical user interface, text, application Description automatically
generated](./img/media/image43.png)

Click the edit icon in the Connection tile.

![Graphical user interface, text, application Description automatically
generated](./img/media/image44.png)

Locate the deployment space you created in the previous lab in the
**Select space** dropdown. Make sure the **Environment type** is set to
**Pre-production**, and click **Save**.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image45.png)

Click the icon to return to the Insights Dashboard.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image46.png)

Click **Add to dashboard**.

![Graphical user interface, application Description automatically
generated](./img/media/image47.png)

Select the machine learning provider you just created, and then the
deployed model from the previous lab. Click **Configure**, then
**Configure Monitors**.

![A picture containing graphical user interface Description
automatically generated](./img/media/image48.png)

Click the edit icon in the **Model input** tile.

![Graphical user interface, text, application, email Description
automatically generated](./img/media/image49.png)

Set the Data type to Numerical/categorical and the Algorithm type to
Binary classification. Click **Save and continue**.

![A picture containing graphical user interface Description
automatically generated](./img/media/image50.png)

Click the edit icon in the **Training data** tile.

![Graphical user interface, application Description automatically
generated](./img/media/image51.png)

Set the **Location** to **Cloud Object Storage**. Copy and paste the
following values into the
form:

| Field                | Value                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Login URL            | https://s3.us.cloud-object-storage.appdomain.cloud                                                                          |
| Resource instance ID | crn:v1:bluemix:public:cloud-object-storage:global:a/7d8b3c34272c0980d973d3e40be9e9d2:2883ef10-23f1-4592-8582-2f2ef4973639:: |
| API key              | yqcPbWZ0AQPHleHVerrR4Wx5e9pymBdMgydbEra5zCif                                                                                |

Click **Connect**.

![Graphical user interface, application Description automatically
generated](./img/media/image52.png)

Select **faststartlab…** from the list of buckets, and select
**modeling\_records\_2020.csv** from the list of data sets. Click
**Next**.

Next, you will need to submit a test record to your model. This will
provide the input and output schema to OpenScale for monitoring. Leaving
the OpenScale browser tab open, return to the tab with your model
deployment.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image53.png)

1.  Click the deployment name  
    In the API reference page, we can see Code snippets for different
    languages.  
    Look at the code snippet for your favorite language

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image54.jpeg)

2.  Click the Test tab

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image55.jpeg)

3.  Click to select the JSON type of input

`{"input_data": [{"fields":
["CURRENT_YEAR","EMPLOYEE_CODE","POSITION_CODE",
"DEPARTMENT_CODE","DAYS_WITH_COMPANY","COMMUTE_TIME",
"AGE_BEGIN_PERIOD","GENDER_CODE","PERIOD_TOTAL_DAYS",
"STARTING_SALARY","ENDING_SALARY","NB_INCREASES",
"BONUS","NB_BONUS", "VACATION_DAYS_TAKEN",
"SICK_DAYS_TAKEN","PROMOTIONS","NB_MANAGERS",
"DAYS_IN_POSITION","DAYS_SINCE_LAST_RAISE","RANKING_CODE",
"OVERTIME","DBLOVERTIME","TRAVEL"],
"values":
[[2020,10013,5300,390,2430,21,46,1,180,
105384.62,105384.62,0,2107.6924,1,9.0,
6.5,0,1,2430,240,2,0.0,0.0,0.0]]
}]}`

4.  Enter the JSON text above into the input field, making sure to erase
    anything that was there before.  
    Note that the input data includes fields like CURRENT\_YEAR and
    EMPLOYEE\_CODE that were removed in the modeling. The model is a
    pipeline that takes the original input and removes the undesired
    fields. This is why these fields are still there.

5.  Click Predict  
    The result shows a high confidence that this specific employee will
    not be leaving.

Return to the OpenScale browser tab.

![Graphical user interface, application Description automatically
generated](./img/media/image56.png)

Click **Check now**. If you get an error message, you may need to wait
10-15 seconds for OpenScale to create the database, and then check
again. If the error persists, ensure that the JSON input in the previous
step has been copied and pasted correctly, and that the model returns a
prediction.

When you receive a **Logging is active message**, click **Next**.

![A picture containing application Description automatically
generated](./img/media/image57.png)

From the list of features, select ATTRITION as the label column, and
click **Next**.

![A picture containing table Description automatically
generated](./img/media/image58.png)

Check the box to select all features as training features, and click
**Next**.

![A picture containing graphical user interface, application Description
automatically generated](./img/media/image59.png)

OpenScale has correctly identified the prediction and probability
columns from the model output. Click **Save**.

![Graphical user interface, text, application Description automatically
generated](./img/media/image60.png)

Click on the Quality monitor to configure it.

![A picture containing graphical user interface, text Description
automatically generated](./img/media/image61.png)

Click the edit icon in the Quality threshold tile. Leave the threshold
value set at 0.8, and click **Next**.

![Graphical user interface, application Description automatically
generated](./img/media/image62.png)

Set the minimum sample size to 100, and click **Save**.

![Graphical user interface, application Description automatically
generated](./img/media/image63.png)

Click on the Drift monitor to configure it.

![A picture containing graphical user interface Description
automatically generated](./img/media/image64.png)

Click the edit icon in the **Drift model** tile.

![Graphical user interface, text, application Description automatically
generated](./img/media/image65.png)

Select Train in **Watson OpenScale** and click **Next**.

![A picture containing graphical user interface Description
automatically generated](./img/media/image66.png)

Set the **Drift threshold** to 5% and click **Next**.

![Icon Description automatically generated](./img/media/image67.png)

Set the **Sample size** to 100 and click **Save**. OpenScale will begin
training an internal drift model to identify the characteristics of
input data your model struggles to correctly predict. This model can
take up to five minutes to train.

![A picture containing text Description automatically
generated](./img/media/image68.png)

When the model is finished training, click the Dashboard link to return
to the Insights Dashboard. You will now see a tile for your model on the
dashboard. Click on the tile.

![Graphical user interface, text, application, chat or text message
Description automatically generated](./img/media/image69.png)

From the **Actions** menu, click **Evaluate now**.

Drag the “data\_2020.csv” \<where should we post this file?\> file from
your machine and drop it into the window, or browse to its location on
your hard drive, and click **Upload and evaluate**.

The evaluation make take a few minutes to run. When it completes, you
can see how your model scored on the quality and drift tests. You can
also explore the various items on the Actions menu, which will allow you
to generate a PDF report of the test results, view model information,
and compare the test results to those from other models.

![Graphical user interface, text, application Description automatically
generated](./img/media/image70.png)

You can also approve the model for production, which will be reflected
on the Insights Dashboard.

You have now created a new predictive attrition model using updated
information, and evaluated its performance. You may continue on to the
next lab.

## 6\. Modeling exploration with Modeler Flows

There are many options available in creating a model. The data we are
using is divided in time period and some records don’t cover the same
number of days. Is it possible that by using rations of the number of
days covered, we would get a better model?

We can do this additional experimentation on modeling without any
programming. For this, we use **Modeler Flows** (SPSS Modeler) to derive
new attributes to see if this improves the modeling. To have a proper
comparison, we create two sets of models. One with the original values
and one with derived values. The following figure shows what we want to
achieve.

![A close up of text on a white background Description automatically
generated](./img/media/image71.jpeg)

Note that the table nodes are not connected. They are required only if
we want to save and use the models. In our case, we only need to
generate the models and see how they performs. Keep this figure in mind
while going through the instructions.

![](./img/media/image18.jpeg)

1.  From within the project, click **Add to project**

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image19.jpeg)

2.  Click Modeler flow

3.  Give the flow a name: **Testing Derived 2020**, then click Create

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image72.jpeg)

4.  Open the **Import** section of the palette, then drag and drop a
    **Data Asset** node  
    onto the canvas.

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image73.jpeg)

5.  Open the Data Asset

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image74.jpeg)

6.  Click Change data asset

7.  Click Data assets, then click modeling\_records\_2020.csv

8.  Click OK, then Save

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image75.jpeg)

9.  Open the Field Operations in the Palette, then drag and drop a
    **Filter** node onto the canvas

    ![A picture containing drawing, clock Description automatically
    generated](./img/media/image76.png)

10. Connect the two operators

11. Open the Filter the same way we did the Import operator earlier

    ![A screenshot of a cell phone screen with text Description
    automatically generated](./img/media/image77.jpeg)

12. Click Add Columns and select the following columns:  
    CURRENT\_YEAR, EMPLOYEE\_CODE, and PERIOD\_TOTAL\_DAYS

13. Click OK, then click Save

14. Open the Field Operations in the Palette, then drag and drop a
    **Type** node onto the canvas

15. Connect the **Filter** node to the **Type** node

16. Open the Type node

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image78.jpeg)

17. Change the ATTRITION type from Continuous to Flag, then click Save

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image79.jpeg)

18. Open the Field Operations in the Palette, then drag and drop an
    **Auto Classifier** node  
    onto the canvas

19. Connect the **Type** node to the **Auto Classifier** node

20. Open the Auto Classifier node

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image80.jpeg)

21. Click Use custom field roles and click ATTRITION

22. Click Add Columns

    ![](./img/media/image81.jpeg)

23. Click the box next to field names to select all the fields

24. Click OK, then Save  
    We just completed the section that will create a model that is
    roughly equivalent to the  
    AutoAI model. Before we execute the flow, we create the second
    model.

25. Open the Field Operations in the Palette, then drag and drop a
    **Derive** node onto the canvas

    ![A picture containing clock Description automatically
    generated](./img/media/image82.jpeg)

26. Connect the input node, the first one that was created, to the
    **Derive** node

27. Open the Derive node

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image83.jpeg)

28. Select Multiple fields

29. Click Add Columns, then select the following columns:  
    BONUS, VACATION\_DAYS\_TAKEN, SICK\_DAYS\_TAKEN, OVERTIME, and
    DBLOVERTIME

30. Click OK

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image84.jpeg)

31. Scroll down the Derive window and enter the formula (case
    sensitive):  
    @FIELD / PERIOD\_TOTAL\_DAYS

32. Click Save

33. Drag a Filter node onto the canvas and connect the Derived node to
    it.

34. Open the Filter node, click Add Columns and select the following
    fields:  
    CURRENT\_YEAR, EMPLOYEE\_CODE, PERIOD\_TOTAL\_DAYS, BONUS,  
    VACATION\_DAYS\_TAKEN, SICK\_DAYS\_TAKEN, OVERTIME, and DBLOVERTIME

35. Click OK, then click Save  
    The next few step are identical to the ones starting at step 14

36. Drag and drop a **Type** node onto the canvas

37. Connect the **Filter** node to the **Type** node

38. Change the ATTRITION type from Continuous to Flag, then click Save

39. Open the Field Operations in the Palette, then drag and drop an
    **Auto Classifier** node  
    onto the canvas

40. Connect the **Type** node to the **Auto Classifier** node

41. Open the Auto Classifier node

42. Click Use custom field roles and click ATTRITION

43. Click Add Columns

44. Click the box next to field names to select all the fields

45. Click OK, then Save  
    At this point your flow should look like this:  
    ![A picture containing clock Description automatically
    generated](./img/media/image85.jpeg)

    We are ready to create the models

    ![A screenshot of a social media post Description automatically
    generated](./img/media/image86.jpeg)

46. Click Run

    ![A close up of text on a white background Description automatically
    generated](./img/media/image87.jpeg)

47. Click View Model  
    You should see something similar to the following:  
    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image88.jpeg)

    We need to do the same with the second Model node

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image89.jpeg)

48. Click Testing Derived 2020

49. View the models for the derived values by clicking View Model  
    This results with something similar to the following figure:

    ![A screenshot of a cell phone Description automatically
    generated](./img/media/image90.jpeg)

In our case here, we see a small improvement with the use of derived
values, a little less than 0.5%. We can then decide if the small
improvement is worth pursuing or other experiments are worthwhile.

We can exit Modeler flow by simply clicking on the project name. This
completes this lab.

## Summary

Models require data that needs to be discovered, processed and analyzed.
Once a model is created, it requires monitoring and will eventually need
to be refreshed.

By completing this lab, you saw:

- How the data needed for the model creation is created

- How to monitor a deployed model to discover issues

- How to create and deploy a model using AutoAI

- Use OpenScale to setup the monitoring of a new model

- How Modeler Flows can be used to do additional modeling explorations

We can take our modeling further by using employee survey data to add to
the detection of attrition. This is the subject of the next lab using
the Modeler Flows Text Analytics to structure and analyze employee
surveys to see if this unstructured data impacts our attrition models.
