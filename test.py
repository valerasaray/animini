import numpy as np
from PIL import Image
from rembg import remove
from time import sleep


def hex_to_rgba(hex):
    rgb = []
    for i in [0, 2, 4]:
        decimal = int(hex[i:i+2], 16) # hex to int
        rgb.append(decimal)
    rgb.append(255)
    return rgb

colors_count = int(input('количество цветов: '))
colors = []
for i in range(colors_count):
    colors.append(hex_to_rgba(input('hex: ')))

input_path = 'rei.png' # input image path
output_path = 'output.png' # output image path
print('+')
input = Image.open(input_path) # load image
output = remove(input) # remove background
output.save(output_path)

input = Image.open('rei.png')
img = np.asarray(input)
img2 = []


for i in range(len(img)):
    print(i)
    img3 = []
    for j in range(len(img[i])):
        if img[i][j][3] == 0:
            img3.append([0, 0, 0, 0])
            continue
        minimum = 255 * 3
        goal_color = 0
        for now_color in colors:
            difference = abs(sum(now_color) - sum(img[i][j]))
            if minimum > difference:
                minimum = difference
                goal_color = colors.index(now_color)
        img3.append(colors[goal_color])
    img2.append(img3)

img_result = np.array(img2, dtype=np.uint8)


img = Image.fromarray(img_result)
img.save('sinonend.png')


# minimizator = Image.fromarray((img_result * 255).astype(np.uint8))

# minimizator.save('mini.png')