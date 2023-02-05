import numpy as np
from PIL import Image
from rembg import remove


# функция преобразования hex кода в список значений rgba
def hex_to_rgba(hex):
    rgba = []
    for i in [0, 2, 4]:
        decimal = int(hex[i:i+2], 16) # hex to int
        rgba.append(decimal)
    rgba.append(255)
    return rgba

def remove_background(input_path, output_path):
    input = Image.open(input_path) # load image
    output = remove(input) # remove background
    output.save(output_path) # save image

def minimize(input_hex_codes):

    input_path = 'input.png' # input image path
    cut_out_image_path = 'cut_out_image.png' # cut out image path
    output_path = 'output.png' # output image paht

    colors = input_hex_codes.split(' ')
    colors = list(map(lambda x: hex_to_rgba(x), colors))

    remove_background(input_path, cut_out_image_path)

    input = Image.open(cut_out_image_path)

    start_image = np.asarray(input)
    final_image = []

    colors_sum = []
    colors_count = len(colors)

    for i in colors:
        colors_sum.append(sum(i))
    width = start_image.shape[0]
    height = start_image.shape[1]

    for i in range(width):
        print(f'{round(i / width * 100, 1)}%', end='\r')
        pixel_row = []
        for j in range(height):
            if start_image[i][j][3] == 0:
                pixel_row.append([0, 0, 0, 0])
                continue
            minimum = 255 * 4
            goal_color = 0
            pixel_color_sum = sum(start_image[i][j])
            for now_color in range(colors_count):
                difference = abs(colors_sum[now_color] - pixel_color_sum)
                if minimum > difference:
                    minimum = difference
                    goal_color = now_color
            pixel_row.append(colors[goal_color])
        final_image.append(pixel_row)

    result_image = np.array(final_image, dtype=np.uint8)

    output = Image.fromarray(result_image)
    output.save(output_path)