AMA = "";
BSE = "";
WMYB= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    AMA = loadSound("Act My Age.mp3");
    AMA.setVolume(1);
    AMA.rate(1);

    BSE = loadSound("Best Song Ever.mp3");
    BSE.setVolume(1);
    BSE.rate(1);

    WMYB= loadSound("What Makes You Beautiful.mp3");
    WMYB.setVolume(1);
    WMYB.rate(1);
}

function setup()
{
    canvas = createCanvas(600,500);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function play1()
{
    if(WMYB.isPlaying(), BSE.isPlaying())
    {
        WMYB.stop();
        BSE.stop();
        AMA.play();
    }
    else
    {
        AMA.play();
        WMYB.stop();
        BSE.stop();
    }
}

function play2()
{
    if(AMA.isPlaying(), BSE.isPlaying())
    {
        AMA.stop();
        BSE.stop();
        WMYB.play();
    }
    else
    {
        WMYB.play();
        AMA.stop();
        BSE.stop();
    }
}

function play3()
{
    if(WMYB.isPlaying(), AMA.isPlaying())
    {
        WMYB.stop();
        AMA.stop();
        BSE.play();
    }
    else
    {
        BSE.play();
        WMYB.stop();
        AMA.stop();
    }
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY="+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("righttWristX = "+ rightWristX + "rightWristY="+rightWristY);
    }
}