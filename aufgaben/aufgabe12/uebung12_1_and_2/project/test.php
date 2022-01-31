<div id="test">

</div>
<?php
    $file = '../navigator_contents.json';
    $contents = file_get_contents($file);
    $json = json_decode($contents);
?>
<script>
    let content = <?php echo json_encode($json); ?>;
    console.log(JSON.stringify(content, null, 2));
    document.getElementById('test').innerText = JSON.stringify(content, null, 2);
</script>