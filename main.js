AMA = "";
BSE = "";
WMYB= "";

function preload()
{
    AMA = loadSound("Act My Age.mp3");
    BSE = loadSound("Best Song Ever.mp3");
    WMYB= loadSound("What Makes You Beautiful.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
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