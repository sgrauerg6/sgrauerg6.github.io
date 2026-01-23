const PHOTO_MAP_HEADING =
  `<span class="header_color header_size bold_text">Map of US showing photo locations</span>`;

const PHOTO_MAP_INFO =
  `<ul>
     <li>Consists of stitched-together photo map screenshots from <a href="https://photos.google.com">Google Photos</a> on iPad</li>
     <li><a href="https://mattabrown.github.io/autostitch.html">AutoStitch</a> program used to stitch together photo maps corresponding to smaller regions</li>
     <li>Pictures (mostly) from 2013 and after...didn't take many pictures using a device that supports geo-tagging before then</li>
     <li>Pictures (mostly) taken using Nikon V1 w/ GPS attachment, Sony Action Cam, GoPro Hero 7, GoPro Hero 10, and Galaxy S3, S5, and S8+ phones</li>
     <li>Light and color of photo map adjusted using Mac Photos program</li>
   </ul>`;

const PHOTO_MAP_CONTENT = 
  `<img style="width: 1024px;" alt="Photo Map" src="photoMapEnhanced.jpeg">`;

function addPhotoMapHeadingInfo() {
  document.getElementById("photo_map_heading").innerHTML = PHOTO_MAP_HEADING;
  document.getElementById("photo_map_info").innerHTML = PHOTO_MAP_INFO;
  document.getElementById("photo_map_content").innerHTML = PHOTO_MAP_CONTENT;
}

addPhotoMapHeadingInfo();